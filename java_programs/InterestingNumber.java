import java.util.HashMap;

/*
 * solution to a top coder problem
 */

import java.util.Map;

public class InterestingNumber {

	public String isInteresting(String x) {

		Map<Integer, Integer> appearance = new HashMap<Integer, Integer>(); // appearance.put(key, value);
		String answer = "empty";
		boolean trueFalse = true;
		for(int i = 0; i < x.length(); i++){ //do not need to check last number since the last number will only matter if it is equal to zero
			int temp = x.charAt(i)-'0';  // can subtract zero digit from it to give it a digit from zero to nine
			if(appearance.containsKey(temp) == false ){
				// System.out.println("adding " + temp);
				appearance.put(temp,  1);
				
				if(temp >= (x.length()-1)-i){ // impossible for the number to occur again
					trueFalse = false;
					break; // breaks
				}else{
					if(temp==(x.charAt(temp+i+1)-'0')){ // throwing out of bounds error here
						// System.out.println("woo");
					} else{
						// System.out.println("boo");
						trueFalse = false;
						break;
					} // end of else if
				} // end of if/else statement
			}else if(appearance.get(temp)==2){
				appearance.put(temp, 3);
				// System.out.println(temp + " is already added" + "and has appeared " + appearance.get(temp) + " times");
				trueFalse = false;
				break;

			}else if(appearance.containsKey(temp) == true){
				appearance.put(temp,  2);
				System.out.println(temp + " is already added" + "and has appeared " + appearance.get(temp) + " times");
			}
		} // end of for statement

		if(trueFalse==true){
			answer = "Interesting";
		}else{
			answer = "Not interesting";
		}
		System.out.println(answer);
		return answer;
	}

}
