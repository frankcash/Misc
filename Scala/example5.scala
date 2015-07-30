// run with scala -cp mysql-connector-java-5.1.36-bin.jar:. example5.scala

import java.sql.{Connection, DriverManager, ResultSet};

/**
* Gets user ids from user field in mysql
*/
object Example3 {

  val conn_str = "jdbc:mysql://localhost:8889/foobar?user=root&password=root"


	def readDBWithJDBC()  {
    val conn = DriverManager.getConnection(conn_str)
    try {
        // Configure to be Read Only
        val statement = conn.createStatement(ResultSet.TYPE_FORWARD_ONLY, ResultSet.CONCUR_READ_ONLY)

        // Execute Query
        val rs = statement.executeQuery("SELECT * FROM users LIMIT 5")

        // Iterate Over ResultSet
        while (rs.next) {
            println(rs.getString("id"))
        }
    }
    finally {
        conn.close
    }
	}

	def main(args: Array[String]){
		readDBWithJDBC()
	}
}
