import matplotlib.pyplot as plt
import numpy as np
x = np.array(range(20))
y=3+0.5*+np.random.randn(20)
plt.plot(x, y, 'bo')
plt.show()
