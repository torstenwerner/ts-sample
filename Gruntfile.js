module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default: {
                src: ["src/main/ts/**/*.ts"],
                //dest: 'build/app.js',
                options: {
                    module: "commonjs",
                    moduleResolution: "node"
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
};
