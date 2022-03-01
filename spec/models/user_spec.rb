require 'rails_helper'

RSpec.describe User, type: :model do
  it 'should validate an email' do
    user = User.create
    expect(user.errors[:email]).to_not be_empty
  end
  it 'should validates encrypted' do
    user = User.create(email:"123@123.com")
    expect(user.errors[:encrypted_password]).to_not be_empty
  end
  it 'should validate a username' do
    user = User.create(email:"123@123.com", encrypted_password:"fhaelj653")
    expect(user.errors[:username]).to_not be_empty
  end
end
