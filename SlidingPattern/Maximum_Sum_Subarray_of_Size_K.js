function MaximumSumSubarrayOfSizeK(k, arr){
    let maxSum =0, subSum=0;
    for(i = 0; i< arr.length-k+1; i++){
        subSum = 0;
        for(j = i; j<i+k; j++){
            subSum += arr[j]
        }
        maxSum = Math.max(maxSum, subSum)
    }
    return maxSum
}

// console.log(MaximumSumSubarrayOfSizeK(3, [2,1,5,1,3,2]))

//Better aproach to solve this problem
function MaximumSumSubarrayOfSizeK(arr, k){
    let maxSum = 0, subSum = 0, subStart = 0;
    for(subEnd = 0; subEnd < arr.length; subEnd++){
        subSum += arr[subEnd]
        if(subEnd>=k-1){
            maxSum = Math.max(maxSum, subSum)
            subSum -= arr[subStart]
            subStart += 1
        }
    }
    return maxSum
}
console.log(MaximumSumSubarrayOfSizeK([2,1,5,1,3,2], 3))