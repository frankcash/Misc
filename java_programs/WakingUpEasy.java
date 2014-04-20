
/*
 * Alex is sleeping soundly. At any moment, his sleepiness can be characterized by an integer. You are given an int S that represents Alex's initial sleepiness. 
 *Unfortunately, several alarms are going to disturb him. These alarms will be ringing in a cyclic order. Each alarm is characterized by its volume. 
 *You are given a list of alarm volumes in a int[] volume in the order in which the alarms are going to ring. Every minute the first alarm on the list rings, and Alex's sleepiness instantly decreases by its volume. The alarm is then moved to the end of the alarm list. 
 *While Alex's sleepiness is positive, he's still sleeping. Once it becomes less than or equal to zero, Alex immediately wakes up. 
 *Return the number of alarms after which Alex will wake up.
 */



/*
 * @author frankcash
 */

public class WakingUpEasy {

	public static int countAlarms(int[] volume, int S) {
		int numTillAwake = 0;


		int index = 0;
		while (S>0){

			if(index>=volume.length){
				index=0;
			}
			S=S-volume[index];
			numTillAwake++;
			index++;
		}

		return numTillAwake;
	}
	public static void main(String[] args){
		int[] volume = new int[]{1};;

		int mySleep = 10000;

		System.out.println(countAlarms(volume, mySleep)); // 10000
		
	}

}
