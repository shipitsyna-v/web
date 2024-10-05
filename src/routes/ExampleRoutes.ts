import HttpStatusCodes from '@src/common/HttpStatusCodes';
import ExampleService from '@src/services/ExampleService';
import Example from '@src/models/Example';

import { IReq, IRes } from './common/types';
import check from './common/check';


// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
  const examples = await ExampleService.getAll();
  return res.status(HttpStatusCodes.OK).json({ examples });
}

/**
 * Add one user.
 */
async function add(req: IReq, res: IRes) {
  const example = check.isValid(req.body, 'example', Example.isExampleType);
  await ExampleService.addOne(example);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq, res: IRes) {
  const example = check.isValid(req.body, 'example', Example.isExampleType);
  await ExampleService.updateOne(example);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const id = check.isNum(req.params, 'id');
  await ExampleService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
