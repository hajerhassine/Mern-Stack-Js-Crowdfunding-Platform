import axios from 'axios'

const url = 'http://localhost:5000';

const urll = 'http://localhost:5008';
const API = axios.create({ baseURL: 'http://localhost:5000/' });



// Banking partners

export const fetchBankingPartners = ()=> axios.get(`${url}/bankingpartners`);
export const createBankingPartners = (newBankingPartners)=> axios.post(`${url}/bankingpartners`, newBankingPartners);
export const updateBankingPartners = (id, updatedBankingPartners) => axios.patch(`${url}/bankingpartners/${id}`, updatedBankingPartners);
export const deleteBankingPartners = (id) => axios.delete(`${url}/bankingpartners/${id}`);

//events

export const fetchEvents = ()=> axios.get(`${url}/events`);
export const createEvents = (newEvents)=> axios.post(`${url}/events`, newEvents);
export const updateEvents = (id, updatedEvents) => axios.patch(`${url}/events/${id}`, updatedEvents);
export const deleteEvents = (id) => axios.delete(`${url}/events/${id}`);



