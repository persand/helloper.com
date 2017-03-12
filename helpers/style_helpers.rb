module StyleHelpers
  def html_class(classes = '')
    if !classes.blank?
      " class=\"#{classes.to_s} no-js\""
    else
      " class=\"no-js\""
    end
  end

  def body_class(classes = '')
    if current_page.data.body_class
      " class=\"#{current_page.data.body_class}\""
    elsif !classes.blank?
      " class=\"#{classes.to_s}\""
    end
  end

  # http://stackoverflow.com/questions/2129928/rails-split-and-wrap-each-character-in-a-string
  #
  # <%- @text = "abc" -%>
  # <%- wrap_each_char(@text) do |c| -%>
  # <span><%= c %></span>
  # <%- end -%>
  def wrap_each_char(string, &block)
    string.each_char.map(&block).join
  end
end
