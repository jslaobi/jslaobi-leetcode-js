/**
 * 解法一：合并数组并排序，再取中位数【运行时长160ms】
 * @param nums1：数组1
 * @param nums2：数组2
 * @return number 返回中位数
 */
function findMedianSortedArrays1(nums1: number[], nums2: number[]): number {
    let mixNums: number[] = nums1.concat(nums2);
    const arrTotalLen: number = mixNums.length;

    if(arrTotalLen === 1){
        return mixNums[0];
    }

    mixNums = mixNums.sort(function(a: number, b: number): number{
        return a - b;
    });
    const isOdd: boolean = arrTotalLen % 2 === 0 ? false : true; // 是否是奇数个数
    let midlleIdx: number = -1;
    let middleNum: number = 0;

    if(isOdd){
        midlleIdx = Math.floor(arrTotalLen / 2);
        middleNum = mixNums[midlleIdx];
    }else{
        midlleIdx = arrTotalLen / 2;
        const prevIdx: number = midlleIdx - 1;

        middleNum = (mixNums[prevIdx] + mixNums[midlleIdx]) / 2;
    }

    return middleNum;
}

/**
 * 解法二：二分查找法，在长度较长的数组中查找中位数【运行时长104ms】
 * @param nums1
 * @param nums2
 * @return number
 */
function findMedianSortedArrays2(nums1: number[], nums2: number[]): number {
    let result: number = 0;
    const len1: number = nums1.length,
        len2: number = nums2.length;
    let findArr: number[] = nums1,
        iteratorArr: number[] = nums2;

    // 中位数从较长的数组中寻找
    if (len2 > len1) {
        findArr = nums2;
        iteratorArr = nums1;
    }

    let tempMidIdx: number = (len1 + len2) / 2;
    let middleIdx: number = (len1 + len2) % 2 === 0 ? tempMidIdx - 1 : Math.floor(tempMidIdx);
    // 目标中位数
    let middleNum: number = findArr[middleIdx];

    for (let i = 0; i < iteratorArr.length; i++) {
        let curNum = iteratorArr[i];

        if (curNum < middleNum) {
            let targetIdx: number = 0,  // 待插入位置下标
                start: number = 0,
                end: number = middleIdx;

            // 二分查找插入的位置
            while (start < end) {
                let mid: number = Math.floor((start + end) / 2);

                if (curNum < findArr[mid]) {
                    end = mid - 1;
                } else if (curNum > findArr[mid]) {
                    start = mid + 1;
                } else {
                    targetIdx = mid;
                    break;
                }

                if (start === end) {
                    targetIdx = start;
                    break;
                }
            }

            findArr.splice(targetIdx, 0, curNum);
            middleNum = findArr[middleIdx]; // 重新获取中间数字
        } else {
            // 从 iteratorArr 获取一个比中位数大的数，并把它添加到 findArr 数组即可
            let nextNum: number = findArr[middleIdx + 1];

            if (nextNum && curNum < nextNum) {
                findArr.splice(middleIdx + 1, 0, curNum);
            } else {
                findArr.push(curNum);
            }
            break;
        }
    }


    // 数组总长度偶数
    if ((len1 + len2) % 2 === 0) {
        result = (middleNum + findArr[middleIdx + 1]) / 2;
    } else {
        result = middleNum;
    }

    return result;
}