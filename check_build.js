const { execSync } = require('child_process');
try {
  execSync('npm run build', { stdio: 'pipe' });
} catch (e) {
  require('fs').writeFileSync('build_err.txt', e.stdout ? e.stdout.toString() : e.message, 'utf8');
}
