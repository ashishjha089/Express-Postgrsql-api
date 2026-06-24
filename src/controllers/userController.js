// Simple controller stubs to prevent startup errors

export async function getAllUsers(req, res, next) {
  try {
    res.json({ message: 'getAllUsers', data: [] });
  } catch (err) {
    next(err);
  }
}

export async function getUserById(req, res, next) {
  try {
    const { id } = req.params;
    res.json({ message: 'getUserById', id });
  } catch (err) {
    next(err);
  }
}

export async function createUser(req, res, next) {
  try {
    const payload = req.body;
    res.status(201).json({ message: 'createUser', payload });
  } catch (err) {
    next(err);
  }
}

export async function updateUser(req, res, next) {
  try {
    const { id } = req.params;
    const payload = req.body;
    res.json({ message: 'updateUser', id, payload });
  } catch (err) {
    next(err);
  }
}

export async function deleteUser(req, res, next) {
  try {
    const { id } = req.params;
    res.json({ message: 'deleteUser', id });
  } catch (err) {
    next(err);
  }
}
