/*
 * Monte-Carlo is an amoeba. Amoebas can feed on gel: whenever an amoeba encounters a piece of gel that is exactly as big as the amoeba, the amoeba will consume the gel and thus double its size. 
 */

/*
 * @author cfcash
 */

public class AmebaDiv2 {

	public int simulate(int[] X, int A) {

		for(int i = 0; i<X.length; i++){
			if(A==X[i]){ // if the amoeba is the same size as the gell
				A+=X[i];
			}
		}
		return A;
	}
}
