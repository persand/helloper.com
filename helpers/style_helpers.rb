module StyleHelpers
  def body_class
    if current_page.data.body_class
      " class=\"#{current_page.data.body_class}\""
    end
  end
end
