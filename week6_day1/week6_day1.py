class Bank_Account:
	def __init__(self):
		self.balance=0
		print("Hello, Wlcome to the Bank")

	def deposit(self):
		amount = float(input("Enter amount to be deposited: "))
		self.balance += amount
		print("\n Amount Deposited:", amount)

	def withdraw(self):
		amount = float(input("Enter amount to be withdrawn: "))
		if self.balance>=amount:
			self.balance -= amount
			print("\n Amount Withdrawn:", amount)
		else:
			print("\n Insufficient Balance")

	def display(self):
		print("Available Balance",self.balance)

s = Bank_Account()

s.deposit()
s.withdraw()
s.display()

