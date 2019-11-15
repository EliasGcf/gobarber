import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
	const { defaultValue, registerField } = useField('avatar');

	const [file, setFile] = useState(defaultValue && defaultValue.id);
	const [preview, setPreview] = useState(defaultValue && defaultValue.url);

	const ref = useRef();

	useEffect(() => {
		if (ref.current) {
			registerField({
				name: 'avatar_id',
				ref: ref.current,
				path: 'dataset.file',
			});
		}
	}, [ref.current]); //eslint-disable-line

	async function hanldeChange(e) {
		const data = new FormData();

		data.append('file', e.target.files[0]);

		const response = await api.post('files', data);

		const { id, url } = response.data;

		setFile(id);
		setPreview(url);
	}

	return (
		<Container>
			<label htmlFor="avatar">
				<img
					src={
						preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
					}
					alt=""
				/>

				<input
					type="file"
					id="avatar"
					accept="image/*"
					data-file={file}
					onChange={hanldeChange}
					ref={ref}
				/>
			</label>
		</Container>
	);
}
