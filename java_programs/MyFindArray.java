
/*
 *Implement a method that given two arrays as parameters will find the starting index where the second parameter occurs as a sub-array in the array given as the first parameter.
 *Your implementations should return -1 if the sub-array cannot be found.
 *Your implementation must implement the FindArray interface.
 */


/*
 * @author frankcash
 */

public class MyFindArray{
	public static int findArray(int[] array, int[] subArray){

		int[] foo = array;
		int[] subFoo = subArray;
		int position = -1;
		for(int i = 0; i<foo.length; i++){
			System.out.println(foo[i]);
			if(foo[i]==subFoo[0]){
				System.out.println(subFoo[0]);
				position = i;
				for(int j=0; j<subFoo.length; j++){
					if(i+j>=foo.length){
						position = -1;
						break;
					}else if(foo[i+j]==subFoo[j]){
						System.out.println("yes");
					}else{
						position = -1;
						break;
					}

				} // end of 2nd for loop
			}
		}
		return position;

	}
	public static void main(String[] args) {
		int[] firstSet = {7, 8, 3, 7, 9};
		int[] secondSet = {3, 7};

		System.out.println("position: " + findArray(firstSet, secondSet)); // should return 2
	}
}