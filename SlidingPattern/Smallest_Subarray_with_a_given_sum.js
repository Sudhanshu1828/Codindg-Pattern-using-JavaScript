function SmallestSubarrayWithaGivenSum(arr, k){
    let subSum = 0,
    minLength = Infinity,
    subStart = 0;
    for(subEnd = 0; subEnd<arr.length; subEnd++){
        subSum += arr[subEnd]
        while(subSum>=k){
            minLength = Math.min(minLength, subEnd - subStart+1)
            subSum -= arr[subStart]
            subStart +=1
        }
    }
    return minLength

}
console.log(SmallestSubarrayWithaGivenSum([2,1,5,2,3,2], 7))