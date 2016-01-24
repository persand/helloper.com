# Configure path for assets
config[:css_dir] = 'assets/stylesheets'
config[:js_dir] = 'assets/javascripts'
config[:images_dir] = 'assets/images'
config[:partials_dir] = 'partials'

@bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
assets_dir = @bower_config["directory"] # "vendor/assets/bower_components"
sprockets.append_path File.join app.root, assets_dir

# Pretty urls
activate :directory_indexes
activate :livereload

# Minimize css/js and fix assets for Build
configure :build do
  activate :autoprefixer
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
  activate :asset_hash
end
