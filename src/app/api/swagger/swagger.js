import swaggerUi from 'swagger-ui-express';
import express from 'express';
import YAML from 'yamljs';
import { MenuItem } from '../../../models/MenuItem';
import {Category} from '../../../models/Category';

const router = express.Router();
const swaggerDocument = YAML.load('./swagger.yaml');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

export default router;