const { execSync } = require('child_process');
try {
  execSync('npx tsc --noEmit', { stdio: 'pipe' });
} catch (e) {
  require('fs').writeFileSync('ts_err.txt', e.stdout.toString(), 'utf8');
}
