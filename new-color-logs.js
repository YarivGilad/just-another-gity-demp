const log = require('@ajar/marker');

const new_log_colors = ()=> {
    log.gray('blue','ocean');       
    log.red('red','tape');  
    log.yellow('cyan','is lighter then blue');       
    log.blue('green','peace');      
    log.magenta('magenta','is lighter then purple');    
    log.green('yellow','mellow');     
}
module.exports = {new_log_colors};