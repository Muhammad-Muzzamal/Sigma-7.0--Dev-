#include <iostream>
#include <vector>
#include<unordered_map>
using namespace std;
 int sumDivisibleByK(vector<int>& nums, int k) {
        unordered_map<int, int> freq;
        for (int num : nums) freq[num]++;
        
        int sum = 0;
        for (auto [num, count] : freq) {
            if (count % k == 0) sum += num * count;
        }
        return sum;
    }
int main()
{
    int array[] = {1, 2, 3, 4, 5};
    return 0;
}