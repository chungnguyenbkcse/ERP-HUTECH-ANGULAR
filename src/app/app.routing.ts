import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

/*
* path: Đường dẫn hiện tại. Trong trường hợp này, đường dẫn gốc (tức là trang chủ) được biểu thị bằng một 
chuỗi rỗng.
* redirectTo: Đường dẫn mà người dùng sẽ được điều hướng đến nếu đường dẫn hiện tại trùng khớp với path.
* pathMatch: Loại khớp đường dẫn. Trong trường hợp này, full đảm bảo rằng chỉ khi đường dẫn hiện tại trùng 
khớp hoàn toàn với path thì mới thực hiện điều hướng.
*/
export const routes: Routes = [
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' }
];


/*
Đầu tiên, RouterModule được import vào ứng dụng Angular để sử dụng. Sau đó, đoạn mã sử dụng phương thức 
forRoot(), mà có hai đối số:

* routes: là một mảng các đường dẫn và cấu hình tương ứng cho chúng trong ứng dụng.
* { useHash: true }: là một đối tượng tùy chọn có một thuộc tính useHash được đặt thành true. Thuộc tính này 
được sử dụng để định cấu hình routing cho ứng dụng, bằng cách sử dụng ký tự '#' để định vị vị trí trên trang.
Khi useHash được đặt thành true, các đường dẫn sẽ có dạng /#/ trên URL.
*/
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
