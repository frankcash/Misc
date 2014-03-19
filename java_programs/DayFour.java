/**
 * This will be a simple program that helps the user calculate how many hours they need to work to make ends meet
 * This is a low level markup of the final project, which will result in a whole Android app 
 */
package fifty_day_challenge_first_java_program;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

/**
 * @author frankcash
 * @github https://github.com/frankcash
 *
 */
public class DayFour {

	/**
	 * @param args none
	 */
	public static void main(String[] args) {
		//gets all the inputs
		Scanner userInput = new Scanner(System.in);
		System.out.println("What is your hourly wage?");
		double hourlyWage = userInput.nextDouble();
		System.out.println("How much is your rent, per month?");
		double rent = userInput.nextDouble();
		System.out.println("How much do you spend a month on food?");
		double food = userInput.nextDouble();
		System.out.println("How much do you spend on other expenses (each month)?");
		double otherExpenses = userInput.nextDouble();
		
		//System.out.println("wage:" + hourlyWage + " rent:" + rent + " other expenses:" + otherExpenses);
		
		double totalCosts = rent + food + otherExpenses;
		
		totalCosts /= 30; // total amount of days in a month
		
		double hoursNeeded = totalCosts / hourlyWage;
		
		System.out.println("You must work " + hoursNeeded + " hours to stay out of the red.");
		
		userInput.close(); //closes scanner
	}

}
