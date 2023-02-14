import { Language } from '../models/index.js'

export const getLanguages = async ({ params }) => {
  const { id } = params
  const language = await Language.findOneByProxy({id});
  return (language);
}