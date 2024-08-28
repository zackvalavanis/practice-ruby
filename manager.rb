#Create a method in the Manager class called give_all_raises that loops through each of the manager’s employees and gives them a raise (using the give_annual_raise method). Demonstrate how it works.
#Create a method in the Manager class called fire_all_employees that loops through each of the manager’s employees and changes their active status to false.

class Employee
  attr_reader :first_name, :last_name, :active
  attr_writer :active

  def initialize(input_options)
    @first_name = input_options[:first_name]
    @last_name = input_options[:last_name]
    @salary = input_options[:salary]
    @active = input_options[:active]
  end

  def print_info
    puts "#{@first_name} #{@last_name} makes #{@salary} a year."
  end

  def give_annual_raise
    @salary = 1.05 * @salary
  end
end

employee1 = Employee.new({first_name: "Majora", last_name: "Carter", salary: 80000, active: true})
employee2 = Employee.new(first_name: "Danilo", last_name: "Campos", salary: 70000, active: true)
employee1.print_info
employee2.print_info

class Manager < Employee
  def initialize(input_options)
    super
    @employees = input_options[:employees]
  end
  def give_all_raises
    p 'i am going to give raise'
    i = 0 
    while i < @employees.length
      @employees[i].give_annual_raise
      i += 1
    end
  end
  def send_report
    puts "Sending email..."
    # use email sending library...
    puts "Email sent!"
  end
end

manager = Manager.new(first_name: "Saron", last_name: "Yitbarek", salary: 100000, active: true, employees: [employee1, employee2])
manager.print_info
manager.send_report
manager.give_all_raises



# Decomposition Practice: 

# Make a method called give_all_raises in the manager class
# call it, make sure it can print 
# access the employees array in that method 
# select one of the employees from the array 
# give that employee a raise
# give the other employee a raise
# figure out how to make this logic more flexible 

