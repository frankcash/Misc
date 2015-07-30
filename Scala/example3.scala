/**does a simple read from a file
*
*/
object Example3 {
	def readFile() : String = {
		val lines = scala.io.Source.fromFile("file.txt", "utf-8").getLines.mkString

		return lines
	}

	def main(args: Array[String]){
		println("main")
		print(readFile())
	}
}
