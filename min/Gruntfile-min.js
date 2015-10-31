module.exports=function(s){require("load-grunt-tasks")(s),s.initConfig({less:{style:{files:{"source/css/style.css":["source/less/style.less"]}}},autoprefixer:{options:{browsers:["last 2 version","ie 9"]},source:{src:"source/css/style.css"}},cssmin:{style:{options:{keepSpecialComments:0,report:"gzip"},files:{"build/css/style.min.css":["build/css/style.css"]}}},cmq:{style:{files:{"build/css/style.css":["build/css/style.css"]}}},csscomb:{dist:{options:{config:".csscomb.json"},files:{"source/less/components/*.less":["source/less/components/*.less"]}}},imagemin:{images:{options:{optimizationLevel:3},files:[{expand:!0,src:["build/img/**/*.{png,jpg,gif,svg}"]}]}},htmlmin:{options:{removeComments:!0,collapseWhitespace:!0,collapseBooleanAttributes:!0,caseSensitive:!0,keepClosingSlash:!1},html:{files:{"build/index.min.html":"build/index.html"}}},copy:{build:{files:[{expand:!0,cwd:"source",src:["img/**","js/**","css/screen.css","fonts/**","*.html"],dest:"build"}]}},ucss:{simple:{pages:{crawl:"build/index.html"},css:["build/css/*.css"]}},sprite:{all:{src:"source/img/*.png",dest:"source/img/sprites.png",destCss:"source/css/sprites.css",padding:15,algorithm:"top-down"}},grunticon:{myIcons:{files:[{expand:!0,cwd:"build/img/svg",src:["*.svg","*.png"],dest:"build/img/sprites-svg"}],options:{svgo:!0,pngcrush:!0}}},watch:{style:{files:["source/less/**/*.less"],tasks:["style"],options:{spawn:!1,livereload:!0}},html:{files:["source/*.html"],options:{spawn:!1,livereload:!0}}},browserSync:{dev:{bsFiles:{src:["source/css/*.css","source/js/*.js","source/*.html"]},options:{watchTask:!0,server:{},notify:!1,startPath:"source/index.html",ghostMode:{clicks:!0,forms:!0,scroll:!1}}}},includes:{options:{debug:!1},multiple_paths:{src:["source/html/index.html"],dest:"source/index.html",options:{includePath:["source/blocks"]}}}}),s.registerTask("default",["less","autoprefixer","browserSync","watch"]),s.registerTask("style",["less","autoprefixer"]),s.registerTask("optimization",["copy","imagemin"])};