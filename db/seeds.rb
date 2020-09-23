require "faker"



10.times do
  # p = 
  Department.create(
    name: Faker::Commerce.department,
    description: Faker::Company.catch_phrase,
  )
  
  # 5.times do 
  #   p.items.create(
  #     name: Faker::Commerce.product_name,
  #     price: Faker::Commerce.price.to_f,
  #   )
  # end
end

puts "Worked"