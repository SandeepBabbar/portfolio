module.exports = (config, env) => {
    if(env==="production"){
        config.output.publicPath="/"
    }
    return config;
};