/* Here, we are asked to find the average of all contiguous subarrays of size ‘5’ in the given array. Let’s solve this:

For the first 5 numbers (subarray from index 0-4), the average is: 
(1+3+2+6−1)/5=>2.2

The average of next 5 numbers (subarray from index 1-5) is: 
(3+2+6−1+4)/5=>2.8

For the next 5 numbers (subarray from index 2-6), the average is: 
(2+6−1+4+1)/5=>2.4
…
Here is the final output containing the averages of all contiguous subarrays of size 5: */

function findAverageOfSubarrays(k, arr){
    const res = []
    for(let i = 0; i<arr.length-k+1; i++){
        sum = 0.0
        for(let j = i; j<i+k; j++){
            sum += arr[j]
        }
        res.push(sum/k)
    }
    return res
}
//console.log(`Averages of subarrays of size k:`,findAverageOfSubarrays(k=5, arr=[1, 3, 2, 6, -1, 4, 1, 8, 2]))

// Better approach to solve this problem


function findAverageOfSubarrays(arr, k){
    const res = []
    let SubSum = 0.0
    ,SubStart = 0 

    for(let SubEnd = 0; SubEnd < arr.length; SubEnd++){
        SubSum += arr[SubEnd]
        if(SubEnd>=k-1){
            res.push(SubSum/k)
            SubSum -= arr[SubStart]
            SubStart += 1
        }
    }
    return res
}
console.log(`Averages of subarrays of size k:`,findAverageOfSubarrays(arr=[1, 3, 2, 6, -1, 4, 1, 8, 2], k=5))
