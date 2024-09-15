#include<iostream>
using namespace std;
int main()
{
    int t; cin>>t;

    while(t--){
        int n,m,q;cin>>n>>m>>q;

        int arr[m];

        for(int i=0;i<m;i++){
            cin>>arr[i];
        }

        int q1; cin>>q1;

        if(q1>arr[0] && q1>arr[1] ){
            int ans1 = q1-arr[0];
            if(ans1<0) ans1*=-1;
            

            int ans2 = q1-arr[1];
            if(ans2<0) ans2*=-1;

            int ans3 = min(ans1,ans2);
            ans3+=(n-q1);
            cout<<ans3<<endl;
        }

        else if(q1<arr[0] && q1<arr[1]){
            int ans1 = q1-arr[0];
            if(ans1<0) ans1*=-1;
            

            int ans2 = q1-arr[1];
            if(ans2<0) ans2*=-1;

            int ans3 = min(ans1,ans2);
            ans3+=(q1-1);
            cout<<ans3<<endl;
        }
        else{
            int ans1 = q1-arr[0];
            if(ans1<0) ans1*=-1;
            

            int ans2 = q1-arr[1];
            if(ans2<0) ans2*=-1;

            int ans = min(ans1,ans2);
            cout<<ans<<endl;
        }
        
    }
    return 0;
}