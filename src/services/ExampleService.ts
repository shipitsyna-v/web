import { RouteError } from '@src/common/classes';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import ExampleRepo from '@src/repos/ExampleRepo';
import { ExampleType } from '@src/models/Example';


// **** Variables **** //

export const USER_NOT_FOUND_ERR = 'ExampleType not found';


// **** Functions **** //

/**
 * Get all users.
 */
function getAll(): Promise<ExampleType[]> {
  return ExampleRepo.getAll();
}

/**
 * Add one user.
 */
function addOne(example: ExampleType): Promise<void> {
  return ExampleRepo.add(example);
}

/**
 * Update one user.
 */
async function updateOne(example: ExampleType): Promise<void> {
  const persists = await ExampleRepo.persists(example.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      USER_NOT_FOUND_ERR,
    );
  }
  // Return user
  return ExampleRepo.update(example);
}

/**
 * Delete a user by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await ExampleRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      USER_NOT_FOUND_ERR,
    );
  }
  // Delete user
  return ExampleRepo.delete(id);
}


// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
