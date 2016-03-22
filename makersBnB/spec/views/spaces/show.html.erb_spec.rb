require 'rails_helper'

RSpec.describe "spaces/show", type: :view do
  before(:each) do
    @space = assign(:space, Space.create!(
      :name => "Name",
      ))
  end
  it "see if it displays through the api" do
    render
    expect(rendered).to match(/Name/)
  end

end


RSpec.describe "/spaces", type: :request do
  describe 'POST /spaces.json' do
    before do
      params = {:space => {:name => "London", :description => "cozy"}}
      post "/spaces.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
    end
    it 'post a place' do
      
      expect(Space.last.name).to eq("London")
      expect(Space.last.description).to eq("cozy")

    end
  end
end

RSpec.describe "spaces/edit", type: :request do
  describe 'GET /spaces/1/edit.json' do
    before do
      params = {:space => {:name => "London"}}
      post "/spaces.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
    end
    it 'edit/update a space' do
      params = {:space => {:name => "Ln"}}
      put "/spaces/1.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
      expect(Space.last.name).to eq("Ln")
    end
  end
end


RSpec.describe 'spaces/destroy', type: :request do
  describe 'DELETE /spaces/1.json' do 
    before do 
      params = {:space => {:name => "London"}}
      post "/spaces.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
    end
    it 'deletes a space' do 
      delete '/spaces/1.json'
      expect(Space.count).to eq(0)
    end
  end
end

RSpec.describe "/spaces", type: :request do
  describe 'POST /spaces.json' do
    before do
      params = {:space => {:name => "London", :description => "cozy", :price => 250 }}
      post "/spaces.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
    end
    it 'has a price' do
      expect(Space.last.price).to eq(250)
    end
  end
end









