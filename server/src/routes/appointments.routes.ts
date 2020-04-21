import { getCustomRepository } from 'typeorm';
import { Router } from 'express';
import { parseISO } from 'date-fns';

import ensureAuthenticade from '@middlewares/ensureAuthenticated';
import CreateAppointmentService from '@services/CreateAppointmentService';
import AppointmentsRepository from '@repositories/AppointmentsRepository';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticade);

appointmentsRouter.get('/', async (req, res) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return res.json(appointments);
});

appointmentsRouter.post('/', async (req, res) => {
  const { provider_id, date } = req.body;

  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService();

  const appointment = await createAppointment.execute({
    provider_id,
    date: parsedDate,
  });

  return res.json(appointment);
});

export default appointmentsRouter;
