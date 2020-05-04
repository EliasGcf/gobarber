import fs from 'fs';
import path from 'path';

import uploadConfig from '@config/upload';
import IStoreProvider from '@shared/container/providers/StorageProvider/models/IStorageProviders';

export default class DiskStorageProvider implements IStoreProvider {
  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.tmpFolder, file),
      path.resolve(uploadConfig.uploadsFolder, file),
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadsFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}
