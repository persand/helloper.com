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
end
