import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, 'src', 'assets', 'Cursos', 'introdução.png');
const dest = path.join(__dirname, 'public', 'introdução.png');

try {
  fs.copyFileSync(source, dest);
  console.log('Imagem copiada com sucesso!');
} catch (error) {
  console.error('Erro ao copiar imagem:', error.message);
}
