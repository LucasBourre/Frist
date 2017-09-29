/**
 * Created by Lucas on 09/09/2017.
 */

//Import required
var args = require('minimist')(process.argv.slice(2));
var extend = require('extend');

//sauvegarde de la variable d'environnement
var environment = args.env || "test" ;

//Configuration
var common_conf = {
    name: "Frist MMORPG",
    version : "0.0.1",
    environment : environment,
    max_player: 100,
    data_paths:{
        items: __dirname +"\\gameData\\" + "Items\\",
        maps: __dirname + "\\gameData\\" + "Maps\\"
    },
    starting_zone:"rm_map_home",
};

//Environnement specifique pour chaque configuration
var conf = {
    production:{
        ip: args.ip || "0.0.0.0",
        port: args.port || 8081,
        database:"mongodb://127.0.0.1/Frist_prod"
    },
    test:{
        ip: args.ip || "0.0.0.0",
        port: args.port || 8082,
        database:"mongodb://127.0.0.1/Frist_test"
    }
};

extend(false, conf.production, common_conf);
extend(false, conf.test, common_conf);

module.exports = config = conf[environment];

