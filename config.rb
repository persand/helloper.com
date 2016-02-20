# Configure path for assets
config[:css_dir] = 'assets/stylesheets'
config[:js_dir] = 'assets/javascripts'
config[:images_dir] = 'assets/images'
config[:partials_dir] = 'partials'

@bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
assets_dir = @bower_config["directory"] # "vendor/assets/bower_components"
sprockets.append_path File.join app.root, assets_dir

# Blog
activate :blog do |blog|
  blog.default_extension = '.md'
  blog.new_article_template = 'article.erb'
  blog.paginate = true
  blog.permalink = "blog/{year}/{month}/{title}/index.html"
  blog.sources = "posts/{year}-{month}-{day}-{title}.html"
end

activate :autoprefixer
activate :directory_indexes
activate :syntax

page "/feed.xml", :layout => false

set :markdown, fenced_code_blocks: true
set :markdown_engine, :redcarpet

configure :development do
  activate :livereload
  set :debug_assets, true
end

# Minimize css/js and fix assets for Build
configure :build do
  activate :gzip
  activate :minify_html
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
  activate :asset_hash, :ignore => [/^media*/]
  #activate :sitemap, :hostname => "https://www.helloper.com"
end
