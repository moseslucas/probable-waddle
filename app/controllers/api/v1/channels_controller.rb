class Api::V1::ChannelsController < ApiController
  def index
    @channels = Channel.all
    render json: @channels, each_serializer: Api::V1::ChannelSerializer
  end

  def public 
    @channels = PublicChannel.all
    render json: @channels, each_serializer: Api::V1::ChannelSerializer
  end

  def private 
    @channels = PrivateChannel.all
    render json: @channels, each_serializer: Api::V1::ChannelSerializer
  end

  def group 
    @channels = GroupChannel.all
    render json: @channels, each_serializer: Api::V1::ChannelSerializer
  end

  # def create
  #   @user = User.new(user_params)
  #
  #   if @user.save
  #     render json: @user, serializer: Api::V1::UserSerializer
  #   else
  #     render json: { message: @user.errors.full_messages.to_sentence }, status: 422
  #   end
  # end
  #
  # def update
  #   @user = User.find(params[:id])
  #
  #   if @user.update_attributes(user_params)
  #     render json: @user, serializer: Api::V1::UserSerializer
  #   else
  #     render json: { message: @user.errors.full_messages.to_sentence }, status: 422
  #   end
  # end

  private

  def user_params
    params.require(:channel).permit(:name)
  end
end
