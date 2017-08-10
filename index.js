var git = require('simple-git/promise')
var fs = require('fs');
var blogGit=git()
var ghPagesGit=git()

Promise.all([(fs.existsSync('src/blog')?Promise.resolve(true):blogGit.clone('git@github.com:AGrzes/AGrzes.github.io.git', 'src/blog', ['--branch', 'blog', '--single-branch']))
.then(()=>blogGit.cwd('src/blog'))
.then(()=>blogGit.pull())
.then(()=>blogGit.reset('hard')),
(fs.existsSync('src/blog')?Promise.resolve(true):ghPagesGit.clone('git@github.com:AGrzes/AGrzes.github.io.git', 'dst', ['--single-branch']))
.then(()=>ghPagesGit.cwd('dst'))
.then(()=>ghPagesGit.pull())
.then(()=>ghPagesGit.reset('hard'))])

