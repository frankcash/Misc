object LoopExample{

	def whileExample(x: Int) : Int ={
		var i = 1
		var sum = 0
		while(i < x){
			i+=1
			sum+=i
		}
		return sum
	}

	def forExample(x: Int) : Int = {
		var sum = 0
		for (i <- 0 until x){
			sum += 1
		}
		return sum
	}

	def main(args: Array[String]){
		println("while loop sum: " + whileExample(10))
		println("for loop sum: " + forExample(10))
	}

}
