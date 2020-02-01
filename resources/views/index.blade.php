<!-- index page -->
@extends('/layout/appLayout')
@section('content')
{{--    vue page template--}}
    <script type="text/x-template" id="page-template">
        <app-root>
        </app-root>
    </script>

{{--    vue mount point--}}
    <div id="app">

    </div>
@endsection
@section('title')
    - index
@endsection
