<!DOCTYPE html>
<html lang="en">
    <head>
        <title>{{ $page->title }}</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    </head>
    <body class="font-sans antialiased text-black leading-normal">
        <div class="max-w-md mx-auto page-content">
            @yield('body')
        </div>

        @if($page->production)
            {{-- analytics --}}
        @endif
    </body>
</html>
