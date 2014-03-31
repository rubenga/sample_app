require 'spec_helper'

describe "LayoutLinks" do

  it "should have an Accueil page at '/'" do
    get '/'
    response.should have_selector('title', :content => "Accueil")
  end

  it "devrait trouver une page Contact at '/contact'" do
    get '/contact'
    response.should have_selector('title', :content => "Contact")
  end

  it "should have an A Propos page at '/about'" do
    get '/about'
    response.should have_selector('title', :content => "About")
  end

  it "should have an Aide page at '/help'" do
    get '/help'
    response.should have_selector('title', :content => "Aide")
  end

end
