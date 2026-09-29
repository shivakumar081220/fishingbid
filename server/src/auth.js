<<<<<<< HEAD
import jwt from 'jsonwebtoken';
import { get, sanitizeUser } from './db.js';

export function signUser(user) { return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '7d' }); }
export async function requireAuth(req, res, next) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'Authentication required' });
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret');
    req.user = sanitizeUser(await get('users', payload.id));
    if (!req.user) return res.status(401).json({ message: 'User not found' });
    next();
  } catch { res.status(401).json({ message: 'Invalid or expired session' }); }
}
export function allow(...roles) { return (req, res, next) => roles.includes(req.user.role) ? next() : res.status(403).json({ message: 'You do not have permission for this action' }); }
=======
import jwt from 'jsonwebtoken';
import { get, sanitizeUser } from './db.js';

export function signUser(user) { return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '7d' }); }
export async function requireAuth(req, res, next) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'Authentication required' });
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret');
    req.user = sanitizeUser(await get('users', payload.id));
    if (!req.user) return res.status(401).json({ message: 'User not found' });
    next();
  } catch { res.status(401).json({ message: 'Invalid or expired session' }); }
}
export function allow(...roles) { return (req, res, next) => roles.includes(req.user.role) ? next() : res.status(403).json({ message: 'You do not have permission for this action' }); }
>>>>>>> f6c02a5868508e540075ced1d6bb233659be5fbf
