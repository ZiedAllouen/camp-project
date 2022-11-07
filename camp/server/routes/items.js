import express from 'express';

import {getItems, getItemsByCreator,commentItem, getItem,createItem,updateItem, deleteItem, likeItem, getItemsBySearch} from '../controllers/items.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/creator', getItemsByCreator);
router.get('/search', getItemsBySearch);
router.get('/:id', getItem);
router.get('/',getItems);
router.post('/',auth,createItem);
router.patch('/:id',auth,updateItem);
router.delete('/:id', auth,deleteItem);
router.patch('/:id/likeItem',auth, likeItem);
router.post('/:id/commentItem',auth, commentItem);
export default router;