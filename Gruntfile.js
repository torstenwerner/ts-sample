module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default: {
                src: ["src/main/ts/**/*.ts"],
                dest: 'build/app.js'
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.registerTask("default", ["ts"]);
};
