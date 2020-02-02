@extends('layout.appLayout')
@section('script')
    <script>
        window.App={!! json_encode([
            'registerData'=>[
                  "name"=>old('name'),
                    "email"=>old('email'),
            ]   ,
            'csrfToken'=>csrf_token(),
            'formAction'=>route('register'),
            'errors'=>$errors->all()
        ]) !!}
    </script>
@endsection
@section('content')
    <app-register></app-register>
    {{--    <form method="POST" action="{{ route('register') }}">--}}
    {{--        @csrf--}}

    {{--        <div class="form-group row">--}}
    {{--            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>--}}

    {{--            <div class="col-md-6">--}}
    {{--                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>--}}

    {{--                @error('name')--}}
    {{--                <span class="invalid-feedback" role="alert">--}}
    {{--                                        <strong>{{ $message }}</strong>--}}
    {{--                                    </span>--}}
    {{--                @enderror--}}
    {{--            </div>--}}
    {{--        </div>--}}

    {{--        <div class="form-group row">--}}
    {{--            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>--}}

    {{--            <div class="col-md-6">--}}
    {{--                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">--}}

    {{--                @error('email')--}}
    {{--                <span class="invalid-feedback" role="alert">--}}
    {{--                                        <strong>{{ $message }}</strong>--}}
    {{--                                    </span>--}}
    {{--                @enderror--}}
    {{--            </div>--}}
    {{--        </div>--}}

    {{--        <div class="form-group row">--}}
    {{--            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>--}}

    {{--            <div class="col-md-6">--}}
    {{--                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">--}}

    {{--                @error('password')--}}
    {{--                <span class="invalid-feedback" role="alert">--}}
    {{--                                        <strong>{{ $message }}</strong>--}}
    {{--                                    </span>--}}
    {{--                @enderror--}}
    {{--            </div>--}}
    {{--        </div>--}}

    {{--        <div class="form-group row">--}}
    {{--            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>--}}

    {{--            <div class="col-md-6">--}}
    {{--                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">--}}
    {{--            </div>--}}
    {{--        </div>--}}

    {{--        <div class="form-group row mb-0">--}}
    {{--            <div class="col-md-6 offset-md-4">--}}
    {{--                <button type="submit" class="btn btn-primary">--}}
    {{--                    {{ __('Register') }}--}}
    {{--                </button>--}}
    {{--            </div>--}}
    {{--        </div>--}}
    {{--    </form>--}}
@endsection
{{--<script>--}}
{{--    import AppRegister from "../../js/components/AppRegister";--}}
{{--    export default {--}}
{{--        components: {AppRegister}--}}
{{--    }--}}
{{--</script>--}}
