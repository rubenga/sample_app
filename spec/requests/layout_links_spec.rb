require 'spec_helper'

describe "LayoutLinks" do

  it "should have an Accueil page at '/'" do
    get '/'
    response.should have_selector('title', :content => "Accueil")
  end

  it "should have a Contact page at '/contact'" do
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

  it "should have an Inscription page at '/signup'" do
    get '/signup'
    response.should have_selector('title', :content => "Inscription")
  end

  it "devrait avoir le bon lien sur le layout" do
    visit root_path

    click_link "Aide" # attention : entrer la chaine en rapport avec link_to 
    response.should have_selector('title', :content => "Aide")
    click_link "Contact"
    response.should have_selector('title', :content => "Contact")
    click_link "Accueil"
    response.should have_selector('title', :content => "Accueil")
    click_link "S'inscrire !"
    response.should have_selector('title', :content => "Inscription")
    click_link "A propos"
    response.should have_selector('title', :content => "About")
  end

end
