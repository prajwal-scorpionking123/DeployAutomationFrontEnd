module.exports = {
    devServer: {
        proxy: {
            '^/v1': {
                target: "http://localhost:3001/api",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/v1': ""
                }
            }
        }
    }
}