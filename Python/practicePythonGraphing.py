# imports modules
import matplotlib.pyplot as plt
import numpy as np


x = np.array(range(20)) # gets a set of 20 numbers

y=3+0.5*+np.random.randn(20) # random values based on the 20

plt.plot(x, y, 'bo') # creates a plot

plt.show() # shows a plot
